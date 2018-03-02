import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProductsService } from '../../../products.service'



@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      createdAt: {
        title: 'Created at',
        type: 'date',
        editable: false,
        default: new Date(),

      },
      updatedAt: {
        title: 'Last updated at',
        type: 'date',
        editable: false,
        default: new Date(),
      },
      sellerName: {
        title: 'Seller Name',
        type: 'string',
      },
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private prService: ProductsService) {
    this.getPr();
  }

  getPr() {

    var self = this;
    this.prService.getPr().subscribe(function (res) {
      if (res.msg === 'Products retrieved successfully.') {
        var prdc = new LocalDataSource();
        for (var i = 0; i < res.data.length; i++) {

          if (res.data[i].sellerName === 'Hamahmi')
            prdc.add(res.data[i]);
        }
        self.source = prdc;
      }

    }, function (error) {
      alert("Error getPr: " + error.msg);
    }

    )

  };

  onCreateConfirm(event): void {


    var NewPr = {
      id: event.newData.id,
      name: event.newData.name,
      price: event.newData.price,
      createdAt: new Date(),
      updatedAt: new Date(),
      sellerName: event.newData.sellerName
    };


    var self = this;



    this.prService.addPr(NewPr).subscribe(function (res) {
      if (res.msg === 'Product was created successfully.') {
        if (NewPr.sellerName === 'Hamahmi')
          event.confirm.resolve(NewPr);

        alert("Prod added!");



      }
    }, function (error) {
      alert("Error Create : " + error.msg);
    }
    );

  }


  update(event): void {

    var NewPr = {
      id: event.data.id,
      name: event.newData.name,
      price: event.newData.price,
      createdAt: event.data.createdAt,
      updatedAt: new Date(),
      sellerName: event.newData.sellerName,
      _id: event.data._id
    };
    var self = this;

    this.prService.updPr(NewPr).subscribe(function (res) {
      if (res.msg === 'Product was updated successfully.') {
        if (NewPr.sellerName === 'Hamahmi')
          event.confirm.resolve(NewPr);
        else
          self.source.remove(event.data);
        alert("Edited ! ");

      }
    }, function (error) {
      alert("Error update : " + error.msg);
    }
    );
  }

  onDeleteConfirm(event): void {
    var self = this;
    this.prService.delPr(event.data).subscribe(function (res) {

      if (res.msg === 'Product was deleted successfully.') {

        alert("deleted !");
        event.confirm.resolve();
      }
    }, function (error) {
      alert("Error del : " + error.msg);
    }
    );
  }
}


