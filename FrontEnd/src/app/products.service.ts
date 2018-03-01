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

  private geturl = 'http://localhost:3000/api/product/getProducts';
  private createurl = 'http://localhost:3000/api/product/createProduct';
  private updateurl = 'http://localhost:3000/api/product/updateProduct/:productId';
  private deleteurl = 'http://localhost:3000/api/product/deleteProduct/:productId';


  getPr(): Observable<any> {
    return this.http.get<any>(this.geturl);
  }

  addPr(product: any): Observable<any> {
    return this.http.post<any>(this.createurl, product, httpOptions);
  }
}

