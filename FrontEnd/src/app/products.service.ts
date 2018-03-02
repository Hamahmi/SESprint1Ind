import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  private geturl = 'http://localhost:3000/api/usersProducts/getProducts';
  private createurl = 'http://localhost:3000/api/usersProducts/createProduct';
  private updateurl = 'http://localhost:3000/api/usersProducts/updateProduct';
  private deleteurl = 'http://localhost:3000/api/usersProducts/deleteProduct';


  getPr(): Observable<any> {
    return this.http.get<any>(this.geturl);
  }

  addPr(product: any): Observable<any> {
    return this.http.post<any>(this.createurl, product, httpOptions);
  }

  delPr(product: any): Observable<any> {
    const id = product._id;
    const url = `${this.deleteurl}/${id}`;
    return this.http.delete<any>(url, httpOptions );
  }


  updPr(product: any): Observable<any> {
    const id = product._id;
    const url = `${this.updateurl}/${id}`;
    return this.http.patch<any>(url,product, httpOptions );
  }




}

