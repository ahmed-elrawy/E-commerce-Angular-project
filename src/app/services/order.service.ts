import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class OrderService {
  private products: ProductResponeModel[] = [];
  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }


}

interface ProductResponeModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}