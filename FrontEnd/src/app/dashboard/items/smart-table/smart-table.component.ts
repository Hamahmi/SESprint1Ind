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

      },
      updatedAt: {
        title: 'Last updated at',
        type: 'date',
        editable: false,
      },
      username: {
        title: 'Seller Name',
        type: 'string',
      },
      componentNo: {
        title: 'Component',
        type: 'number',
        
      }
      
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

  source: LocalDataSource;

  constructor(private prService: ProductsService) {
    this.source = new LocalDataSource();
    this.getPr();
  }

  getPr() {

    var self = this;
    this.prService.getPr().subscribe(function (res) {
      if (res.msg === 'Products retrieved successfully.') {
        var prdc = new LocalDataSource();
        for (var i = 0; i < res.data.length; i++) {

     //     if (res.data[i].username.toUpperCase() == window.sessionStorage.username.toUpperCase())
            prdc.add(res.data[i]);
        }
        self.source = prdc;
      }
      else
        alert(res.msg);

    }, function (error) {
      alert("Error getPr: " + error.msg);
    }

    )

  };

  onCreateConfirm(event): void {

    if(window.sessionStorage.type === 'Viewer')
      alert("You can not add products, you are only a viewer!");
      else{
    event.newData.createdAt = new Date();
    var NewPr = {
      name: event.newData.name,
      price: event.newData.price,
      createdAt: event.newData.createdAt,
      updatedAt: null,
      username: window.sessionStorage.username,
      componentNo: event.newData.componentNo

    };
    var self = this;

    this.prService.addPr(NewPr).subscribe(function (res) {
      if (res.msg === 'Product was created successfully.') {
       // if (NewPr.username.toUpperCase() === window.sessionStorage.username.toUpperCase())
          event.confirm.resolve(NewPr);
      //  else
      //    self.source.remove(event.data);
        alert(res.msg);



      }
      else
        alert(res.msg);
    }, function (error) {
      alert("Error Create : " + error.msg);
    }
    );
  }
  }


  update(event): void {


    if(window.sessionStorage.type === 'Viewer')
      alert("You can not edit products, you are only a viewer!");
    else if((event.data.username.toUpperCase() !== window.sessionStorage.username.toUpperCase()) && (window.sessionStorage.type === 'Manager'))
      alert('You can only change your products!');
     

    else{
    event.newData.updatedAt = new Date();
    event.data.updatedAt = new Date();
    var NewPr = {
      name: event.newData.name,
      price: event.newData.price,
      createdAt: event.data.createdAt,
      updatedAt: event.newData.updatedAt,
      username: event.data.username,
      componentNo: event.newData.componentNo,
      _id: event.data._id
    };
    var self = this;
    

    this.prService.updPr(NewPr).subscribe(function (res) {
      if (res.msg === 'Product was updated successfully.') {
          event.confirm.resolve(NewPr);

        alert(res.msg);


      }
      else
        alert(res.msg);
    }, function (error) {
      alert("Error update : " + error.msg);
    }
    );
  }
  }

  onDeleteConfirm(event): void {

    if(window.sessionStorage.type === 'Viewer')
      alert("You can not delete products, you are only a viewer!")
    else
      if((event.data.username.toUpperCase() !== window.sessionStorage.username.toUpperCase() )&& (window.sessionStorage.type === 'Manager'))
       alert('You can only delete your products!');
    else {

    var self = this;
    this.prService.delPr(event.data).subscribe(function (res) {

      if (res.msg === 'Product was deleted successfully.') {


        event.confirm.resolve();
        alert(res.msg);
      }

      else
        alert(res.msg);
    }, function (error) {
      alert("Error del : " + error.msg);
    }
    );
  }
}
}


