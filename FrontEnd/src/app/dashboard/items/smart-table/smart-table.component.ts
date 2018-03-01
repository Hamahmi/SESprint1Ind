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
      },
      updatedAt: {
        title: 'Updated at',
        type: 'date',
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
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

  };

  source: Array<any>;

  constructor(private prService: ProductsService) {
    this.getPr();
  }

  getPr() {

    var self = this;
    this.prService.getPr().subscribe(function (res) {
      if (res.msg === 'Products retrieved successfully.') {
        var prdc = new Array();
        for (var i = 0; i < res.data.length; i++) {
          console.log(res.data[i]);
        //  if (res.data[i].sellerName === 'Hamahmi')
            prdc.push(res.data[i]);
        }
        self.source = prdc;
      }

    }, function (error) {
      alert("Error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + error.msg);
    }

    )

  };

  onCreateConfirm(event): void {
    if(event.newData.createdAt !== null){}
    else{
      event.newData.createdAt = new Date();
    }
    var NewPr = {
      id: event.newData.id,
      name: event.newData.name,
      price: event.newData.price,
      createdAt: event.newData.createdAt,
      updatedAt: event.newData.updatedAt,
      sellerName: event.newData.sellerName
    };
    

    var self = this;
    this.prService.addPr(NewPr).subscribe(function (res) {
      if (res.msg === 'Product was created successfully.') {

        alert("success");
        event.confirm.resolve();
      }
    }, function(error)
    {
      alert("Error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + error.msg);
    }
  );


  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
     // this.prService.delPr(event)
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
