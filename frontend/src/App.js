import { createBrowserRouter,  RouterProvider, useParams } from "react-router-dom";
import { Card, Grid, CardMedia } from "@mui/material";
import Navbar from "./Component/Navbar.js"
import Home from "./pages/Home";
import Titlebar from "./Component/TitbleBar";
import Grocery from "./pages/Grocery.js";
import Fashion from "./pages/Fashion.js";
import Electronics from "./pages/Electronics";
import Mobile from "./pages/Mobile.js";
import Appliances from "./pages/Appliances.js";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SignUpComponent } from './Component/buyer/SignUpComponent.js'
import { SignInComponent } from "./Component/buyer/SignInComponent.js"

import SellersNavbar from "./Component/seller/Navbar.js"
import SellersDashBoard from './pages/seller/Dashboard.js'
import { SellerSignUpComponent } from "./Component/seller/SellerSignUpComponent.js";
import { SellerSignInComponent } from "./Component/seller/SellerSignInComponent.js";
import ProductManagement from "./Component/seller/ProductManagementComponent.js";
import ProductCategory from "./Component/seller/ProductCategoryComponent.js";

import AddMobile from "./Component/seller/moblies/AddMobile.js";
import MobileListComponent from './Component/mobiles/MobileListComponent.js';
import MobileItemComponent from './Component/mobiles/ItemComponent.js'
// import MobileComponent from "./Component/mobiles/MobileComponent.js";

import AddShirt from "./Component/seller/fashion/shirts/AddShirt.js"
import AddLaptop from './Component/seller/electronics/laptops/AddLaptop.js'
import AddLedTV from "./Component/seller/appliances/LedTV/AddLedTV.js";
import AddFridge from './Component/seller/appliances/fridge/AddFridge.js';
import AddFlour from './Component/seller/grocery/flours/AddFlour.js';
import AddWashingMachine from "./Component/seller/appliances/WashingMachine/AddWashingMachine.js";
import AddPrinter from "./Component/seller/electronics/printer/AddPrinter.js";
import AddCamera from "./Component/seller/electronics/camera/AddCamera.js";
import AddTShirt from "./Component/seller/fashion/tshirts/AddTShirt.js";
import AddShoe from "./Component/seller/fashion/shoes/AddShoe.js";
import AddCooler from "./Component/seller/appliances/cooler/AddCooler.js";
import AddJeans from "./Component/seller/fashion/jeans/AddJeans.js";
import AddTrackPant from './Component/seller/fashion/trackPant/AddTrackPant.js'
import AddDetergent from "./Component/seller/grocery/detergents/AddDetergents.js";
import AddCleaningEssentials from "./Component/seller/grocery/cleaningEssesntials/AddCleaningEssentials.js";
import AddOralCare from './Component/seller/grocery/oralCare/AddOralCare.js'

import GroceryProductComponent from "./Component/grocery/products/ProductComponent.js";
import GroceryProductItemCompenont from './Component/grocery/products/ItemComponent.js'
import GroceryProductListComponent from "./Component/grocery/products/ProductListComponent.js";

import AppliancesProductComponent from "./Component/appliances/Products/ProductComponent.js";
import AppliancesProductItemCompenont from './Component/appliances/Products/ItemComponent.js'
import AppliancesProductListComponent from "./Component/appliances/Products/ProductListComponent.js";

import ElectronicsProductComponent from "./Component/electronics/Products/ProductComponent.js"
import ElectronicsProductItemCompenont from "./Component/electronics/Products/ItemComponent.js"
import ElectronicsProductListComponent from './Component/electronics/Products/ProductListComponent.js'

import FashionProductComponent from './Component/fashion/Products/ProductComponent.js';
import FashionProductItemCompenont from './Component/fashion/Products/ItemComponent.js'
import FashionProductListComponent from './Component/fashion/Products/ProductListComponent.js'

import OrderComponent from "./Component/orders/OrderComponent.js";
import CartComponent from "./Component/cart/cartComponent.js";
import MyProfileComponent from "./Component/buyer/MyProfileComponent.js";
import OrderTrackComponent from './Component/orders/OrderTrackComponent.js'

import ProductUpdateComponent from './Component/seller/ProductUpdateComponent.js'

import SearchResultComponent from './Component/SearchResultComponent.js'

import { Provider } from "react-redux";
import { store } from "./Store.js";
import AuthLoader from "./AuthLoader.js";
import AddShampoo from "./Component/seller/grocery/shampoo/AddShampoo.js";
import MyOrderDeatilsComponent from './Component/orders/MyOrderDetailsComponent.js'
import { useSearchParams } from 'react-router-dom';
import CommingSoon from './images/HomeSliderImg/comingSoon.jpg'



const AppliancesItemComponent = () => {
  const { Item } = useParams();



  if (Item === "LedTV") {

    return <AppliancesProductComponent ProductCategory={Item} companies={['Sony', 'LG', 'Samsung']} />;
  }
  else if (Item === "Fridge") {
    return <AppliancesProductComponent ProductCategory={Item} companies={['Haier', 'Samsung']} />;
  }
  else if (Item === "WashingMachine") {
    return <AppliancesProductComponent ProductCategory={Item} companies={['Haier', 'Godrej', 'LG', 'Whirlpool',]} />;
  }
  else if (Item === "Cooler") {
    return <AppliancesProductComponent ProductCategory={Item} companies={['Novamax', 'Godrej', 'LG', 'Whirlpool',]} />;
  }
  else if (Item === "AC") {
    return (


      <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>


        <Item
          square

          elevation={1}
          sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
        >

          <Card square elevation={0} sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxWidth: "350px", objectFit: "contain" }}
              image={CommingSoon}
            />
          </Card>
        </Item>

      </Grid>

    )
  }
  else if (Item === "WaterFurifier") {
    return (


      <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>


        <Item
          square

          elevation={1}
          sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
        >

          <Card square elevation={0} sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxWidth: "350px", objectFit: "contain" }}
              image={CommingSoon}
            />
          </Card>
        </Item>

      </Grid>

    )
  }
  else {

    return (


      <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', flexWrap: 'nowrap', justifyContent: { xs: 'center', }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>


        <Item
          square

          elevation={1}
          sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
        >

          <Card square elevation={0} sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxWidth: "350px", objectFit: "contain" }}
              image={CommingSoon}
            />
          </Card>
        </Item>

      </Grid>

    )
  }
};

const AppliancesItemListComponent = () => {
  const param = useParams();
  console.log(param)

  if (param.companyName === "Sony") {

    return <AppliancesProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Samsung") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Novamax") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Panasonic") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "LG") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Haier") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "Whirlpool") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "Godrej") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "LG") {
    return <AppliancesProductListComponent ProductCategory={param.Item} />;
  }

  else {

    return <div>Item not found</div>;
  }
};

const ElectronicsItemComponent = () => {

  const { Item } = useParams();

  if (Item === "Laptop") {

    return <ElectronicsProductComponent MainCategory={'Electronics'} ProductCategory={Item} companies={['HP',]} />;
  }

  else if (Item === "Printer") {
    return <ElectronicsProductComponent MainCategory={'Electronics'} ProductCategory={Item} companies={['HP', 'Godrej', 'LG', 'Whirlpool',]} />;
  }
  else {

    return (


      <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>


        <Item
          square

          elevation={1}
          sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
        >

          <Card square elevation={0} sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxWidth: "350px", objectFit: "contain" }}
              image={CommingSoon}
            />
          </Card>
        </Item>

      </Grid>

    )
  }
};



const ElectronicsItemListComponent = () => {
  const param = useParams();
  console.log(param)

  if (param.companyName === "HP") {

    return <ElectronicsProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Samsung") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Panasonic") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "LG") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Haier") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "Whirlpool") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "Godrej") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "LG") {
    return <ElectronicsProductListComponent ProductCategory={param.Item} />;
  }

  else {

    return <div>Item not found</div>;
  }
};


const FashionItemComponent = () => {
  const { Item } = useParams();

  if (Item === "Shirt") {

    return <FashionProductComponent ProductCategory={Item} companies={['ZHAO', 'Majestic-Man']} />;
  }
  else if (Item === "Tshirt") {
    return <FashionProductComponent ProductCategory={Item} companies={['Campus-Sutra', 'Veirdo']} />;
  }
  else if (Item === "TrackPant") {
    return <FashionProductComponent ProductCategory={Item} companies={['Yunek', 'Samsung']} />;
  }
  else if (Item === "Shoe") {
    return <FashionProductComponent ProductCategory={Item} companies={['Campus', 'Samsung']} />;
  }
  else if (Item === "Jeans") {
    return <FashionProductComponent ProductCategory={Item} companies={['Urbano-Fashion', 'Samsung']} />;
  }
  else {

    return (


      <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>


        <Item
          square

          elevation={1}
          sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
        >

          <Card square elevation={0} sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxWidth: "350px", objectFit: "contain" }}
              image={CommingSoon}
            />
          </Card>
        </Item>

      </Grid>

    )
  }
};

const FashionItemListComponent = () => {
  const param = useParams();
  console.log(param.Item)

  if (param.companyName === "Urbano-Fashion") {

    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Campus-Sutra") {
    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "ZHAO") {
    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Yunek") {
    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Majestic-Man") {
    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Veirdo") {
    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Campus") {
    return <FashionProductListComponent ProductCategory={param.Item} />;
  }
  else {

    return <div>Item not found</div>;
  }
};


const GroceryItemComponent = () => {
  const { Item } = useParams();


  if (Item === "Flour") {

    return <GroceryProductComponent ProductCategory={Item} companies={['AASHIRVAAD', 'FORTUNE', 'PILLSBURY', 'PATANJALI']} />;
  }
  else if (Item === "Detergent") {
    return <GroceryProductComponent ProductCategory={Item} companies={['Tide', 'Surf-Excel',]} />;
  }
  else if (Item === "CleaningEssentials") {
    return <GroceryProductComponent ProductCategory={Item} companies={['Lizol', 'Vim']} />;
  }
  else if (Item === "Shampoo") {
    return <GroceryProductComponent ProductCategory={Item} companies={['PANTENE', 'HEAD-&-SHOULDERS', 'Clinic-Plus']} />;

  }
  else if (Item === "OralCare") {
    return <GroceryProductComponent ProductCategory={Item} companies={['Closeup', 'Colgate', 'SENSODYNE', 'Dabur']} />;

  }
  else {

    return (
      <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>
        <Item
          square

          elevation={1}
          sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
        >

          <Card square elevation={0} sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxWidth: "350px", objectFit: "contain" }}
              image={CommingSoon}
            />
          </Card>
        </Item>

      </Grid>
    )
  }

};

const GroceryItemListComponent = () => {
  const param = useParams();
  console.log(param)

  if (param.companyName === "AASHIRVAAD") {

    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "PILLSBURY") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Lizol") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Vim") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Tide") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Surf-Excel") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Closeup") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else if (param.companyName === "Colgate") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "HEAD-&-SHOULDERS") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "PANTENE") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;

  }
  else if (param.companyName === "LG") {
    return <GroceryProductListComponent ProductCategory={param.Item} />;
  }
  else {

    return <div>Item not found</div>;
  }
};

export const BuyerWrapper = () => {
  const param = useParams();
  console.log(param);
  if (param.item === 'signup') {
    return <SignUpComponent />
  }
  else if (param.item === 'signin') {
    return <SignInComponent />
  }
  else if (param.item === 'myprofile') {
    return <MyProfileComponent />
  }
  else if (param.item.toLocaleLowerCase() === 'manage-address') {
    return <MyProfileComponent />
  }
  else if (param.item === 'cartDetails') {
    return <CartComponent />
  }
  else if (param.item === 'orderDetails') {
    return <MyOrderDeatilsComponent />
  }
  else if (param.item === 'trackOrder') {
    return <OrderTrackComponent />
  }
  else {
    return <>no match found</>
  }
}

export const OrderWrapper = () => {

  const [searchParam] = useSearchParams();
  const ProductCategory = searchParam.get('ProductCategory')
  const id = searchParam.get('id')
  const defaultImg = searchParam.get('img')

  return <OrderComponent ProductCategory={ProductCategory} id={id} defaultImg={defaultImg} />

}



export const SearchResultComponentWrapper = () => {

  const [searchParam] = useSearchParams();
  const searchInput = searchParam.get('searchInput')


  console.log(searchInput)

  return <SearchResultComponent searchInput={searchInput} />

}






export function ProductManagementWrapper() {
  const param = useParams();
  console.log(param);
  


  if (param.item === "Mobile") {

    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Fridge") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "LedTV") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "AC") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "WaterPurifier") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "WashingMachine") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Shirt") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Tshirt") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Jeans") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Shoe") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "TrackPant") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "WindCheater") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Laptop") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Camera") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Printer") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Flour") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Detergent") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Shampoo") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "OralCare") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "CleaningEssentials") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Cooler") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else if (param.item === "Pulses") {
    return <ProductManagement ProductCategory={param.Item} />;
  }
  else {

    return <div>Item not found</div>;
  }
}

export function ProductUpdateComponentWrapper() {
  const [searchParam] = useSearchParams();
  const ProductCategory = searchParam.get('ProductCategory')
  const itemId = searchParam.get('itemId')

  console.log(itemId);
  console.log(ProductCategory,);
  if (ProductCategory === "Mobile") {

    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Tshirt") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Jeans") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Shirt") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "TrackPant") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Shoe") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Laptop") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Camera") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Printer") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Fridge") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Cooler") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "LedTv") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "WashingMachine") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Flour") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Detergent") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "OralCare") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "Shampoo") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else if (ProductCategory === "CleaningEssentials") {
    return <ProductUpdateComponent ProductCategory={ProductCategory} />;
  }
  else {
    return <div>Item not found</div>;
  }
}



export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {

          element: <Navbar />,
          children:
            [
              {
                index: true,
                element: <Home />,
              },

              {
                path: "buyer",

                children:
                  [
                    {
                      path: ":item",
                      element: <BuyerWrapper />
                    },


                  ],
              },
              {
                path: "Product",
                children: [

                  {
                    path: 'preview',
                    element: <OrderWrapper />
                  }
                ]
              },

              {
                // path: "/",
                element: <Titlebar />,
                children: [
                  {
                    path: "Grocery",
                    children:
                      [
                        {
                          index: true,
                          element: <Grocery productCategory={'Grocery'} />,
                        },
                        {
                          path: ":Item",
                          children:
                            [
                              {
                                index: true,
                                element: <GroceryItemComponent />
                              },
                              {

                                path: ":id",
                                element: <GroceryProductItemCompenont />
                              },
                              {
                                path: `:ItemDetails`,
                                children: [
                                  {

                                    path: ":companyName",
                                    element: <GroceryItemListComponent />
                                  }
                                ]
                              }
                            ]
                        },

                      ]

                  },
                  {
                    path: "Mobile",
                    children:
                      [
                        {
                          index: true,
                          element: <Mobile productCategory={'Mobile'} />,

                        },
                        {
                          path: ":id",
                          element: <MobileItemComponent ProductCategory={'Mobile'} />
                        },
                        {
                          path: "MobileDetails",
                          children:
                            [
                              {

                                path: ":companyName",
                                element: <MobileListComponent ProductCategory={'Mobile'} />
                              }
                            ],
                        },
                      ]
                  },
                  {
                    path: "Fashion",
                    children:
                      [
                        {
                          index: true,
                          element: <Fashion productCategory={'Fashion'} />,

                        },
                        {
                          path: ":Item",
                          children:
                            [
                              {
                                index: true,
                                element: <FashionItemComponent />
                              },
                              {
                                path: ":id",
                                element: <FashionProductItemCompenont />
                              },
                              {
                                path: `:ItemDetails`,
                                children:
                                  [
                                    {

                                      path: ":companyName",
                                      element: <FashionItemListComponent />
                                    },
                                  ]
                              }
                            ]
                        },
                      ]
                  },

                  {
                    path: "Electronics",
                    children:
                      [
                        {
                          index: true,
                          element: <Electronics productCategory={'Electronics'} />,
                        },
                        {
                          path: ":Item",
                          children:
                            [
                              {
                                index: true,
                                element: <ElectronicsItemComponent />
                              },
                              {
                                path: ":id",
                                element: <ElectronicsProductItemCompenont />
                              },
                              {
                                path: `:ItemDetails`,
                                children:
                                  [
                                    {

                                      path: ":companyName",
                                      element: <ElectronicsItemListComponent />
                                    },
                                  ]
                              }
                            ]
                        },
                      ]
                  },

                  {
                    path: "Appliances",

                    children:
                      [
                        {
                          index: true,
                          element: <Appliances productCategory={'Appliances'} />,
                        },
                        {


                          path: ":Item",
                          children:
                            [
                              {
                                index: true,
                                element: <AppliancesItemComponent />
                              },
                              {
                                path: ":id",
                                element: <AppliancesProductItemCompenont />
                              },
                              {
                                path: `:ItemDetails`,
                                children:
                                  [
                                    {

                                      path: ":companyName",
                                      element: <AppliancesItemListComponent />
                                    },
                                  ]
                              }
                            ]
                        },
                      ]
                  },
                  {
                    path: "searchResult",

                    element: <SearchResultComponentWrapper />,

                  },



                ],
              },
            ]
        },

        {
          path: "seller",
          element: <SellersNavbar />,
          children:
            [
              {
                path: "dashboard",
                element: <SellersDashBoard />
              },
              {
                path: "signup",
                element: <SellerSignUpComponent />
              },
              {
                path: "signin",
                element: <SellerSignInComponent />
              },
              {
                path: "productManagement",
                children: [

                  {

                    index: true,
                    element: <ProductManagement />,

                  },
                  {
                    path: "updateProduct",
                    children:
                      [
                        {
                          path: ':item',
                          element: <ProductUpdateComponentWrapper />,

                        }
                      ]

                  },
                  {

                    path: ':item',
                    element: <ProductManagementWrapper />,

                  },

                ]

              },
              {
                path: "catergory",
                element: <ProductCategory />
              },
              {
                path: "addmobile",
                element: <AddMobile />
              },
              {
                path: "addtshirt",
                element: <AddTShirt />
              },
              {
                path: "addshirt",
                element: <AddShirt />
              },
              {
                path: "addshoe",
                element: <AddShoe />
              },
              {
                path: "addlaptop",
                element: <AddLaptop />
              },
              {
                path: "addfridge",
                element: <AddFridge />
              },
              {
                path: "addflour",
                element: <AddFlour />
              },
              {
                path: "addledTV",
                element: <AddLedTV />
              },
              {
                path: "addwashingMachine",
                element: <AddWashingMachine />
              },
              {
                path: "addprinter",
                element: <AddPrinter />
              },
              {
                path: "addcamera",
                element: <AddCamera />
              },
              {
                path: "addcooler",
                element: <AddCooler />
              },
              {
                path: "addjeans",
                element: <AddJeans />
              },
              {
                path: "addtrackPant",
                element: <AddTrackPant />
              },
              {
                path: "adddetergent",
                element: <AddDetergent />
              },
              {
                path: "addcleaningEssentials",
                element: <AddCleaningEssentials />
              },
              {
                path: "addoralCare",
                element: <AddOralCare />
              },
              {
                path: "addshampoo",
                element: <AddShampoo />
              },

            ],
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <AuthLoader />
        <ToastContainer />
        <RouterProvider router={router} />

      </Provider>
    </>
  );
}


