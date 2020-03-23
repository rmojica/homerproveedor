import { Component } from '@angular/core';
import { Home } from "../home/home";
import { ProductsListPage } from "../products-list/products-list";
import { WishlistPage } from '../../pages/account/wishlist/wishlist';
import { CartPage } from "../cart/cart";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
}
)

export class TabsPage{
  Home= Home;
  productListPage= ProductsListPage;
  WishlistPage= WishlistPage;
  CartPage= CartPage
}
