import type { LocalConfig } from '../index'
import { Product } from '@vercel/commerce/types/product'
import { GetProductOperation } from '@vercel/commerce/types/product'
import data from '../../data.json'
import type { OperationContext } from '@vercel/commerce/api/operations'

export default function getProductOperation({
  commerce,
}: OperationContext<any>) {
  async function getProduct<T extends GetProductOperation>({
    query = '',
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<Product | {} | any> {
    return {
      product: data.products.find(({ slug }) => slug === variables!.slug),
    }
  }

  return getProduct
}

const defaultProduct = {
  "id": "8dd4ecf9c8456b3dfb194268260ddd14",
  "name": "Qualcomm Original Car Charger QC 3.0\/2.0 100% Genuine Fast Charging Port with Blue Lights, Car Charging Best Fitted Spot, New without Box",
  "description": "Qualcomm 100% Fast Car Charger Adapter QC 3.0Multi USB fast Charging PortA RELIABLE SOURCE FOR CHARGING YOUR MOBILE DEVICE WHILE DRIVING.GREAT QUALITYLESS CONSUMPTION OF POWERCharge Your Mobile Device With Great EfficiencyFast Charging Slots 3.02 ports of 3.0 or 3.1 QCAvailable colors Black\/WhiteSpecifications:Quick Car Charger QC3.0 For Samsung Xiaomi Huawei Sony Android Charge Adapter Data Tablet Car-ChargerINPUT:- 12-24V\/2.4A\/3A TYPE: CAR CHARGER POWER SOURCE- CAR LIGHTER SLOT OUTPUT- 9V-12V\/1.5A\/2A OUTPUT INTERFACE-USB PORTS:-23.0 Port is the Fast Charging PortNew Without BoxAvailable colors: Black\/White",
  "descriptionHtml": "<p style=\"margin:0;padding:8px 0;white-space:pre-wrap\"><span><\/span><\/p><h3 style=\"margin:0;padding:8px 0;white-space:pre-wrap;text-align:center;display:inline-block;width:100%\"><strong style=\"font-weight:bold\">Qualcomm 100% Fast Car Charger Adapter QC 3.0Multi USB fast Charging Port<\/strong><\/h3><ul style=\"list-style:disc;margin-left:10px\"><li><span>A RELIABLE SOURCE FOR CHARGING YOUR MOBILE DEVICE WHILE DRIVING.<\/span><\/li><li><span>GREAT QUALITY<\/span><\/li><li><span>LESS CONSUMPTION OF POWER<\/span><\/li><li><span>Charge Your Mobile Device With Great Efficiency<\/span><\/li><li><span>Fast Charging Slots 3.0<\/span><\/li><li><span>2 ports of 3.0 or 3.1 QC<\/span><\/li><li><span>Available colors Black\/White<\/span><\/li><\/ul><h3><strong style=\"font-weight:bold\">Specifications:<\/strong><\/h3><ul style=\"list-style:disc;margin-left:10px\"><li><span>Quick Car Charger QC3.0 For Samsung Xiaomi Huawei Sony Android Charge Adapter Data Tablet Car-Charger<\/span><\/li><li><span>INPUT:- 12-24V\/2.4A\/3A <\/span><\/li><li><span>TYPE: CAR CHARGER <\/span><\/li><li><span>POWER SOURCE- CAR LIGHTER SLOT OUTPUT- 9V-12V\/1.5A\/2A <\/span><\/li><li><span>OUTPUT INTERFACE-USB PORTS:-2<\/span><\/li><li><span>3.0 Port is the Fast Charging Port<\/span><\/li><li><span>New Without Box<\/span><\/li><li><span>Available colors: Black\/White<\/span><\/li><\/ul><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/sg-live-01.slatic.net\/p\/e983fefae2b3fe192f448f2d6fabad14.jpg\" style=\"width:100%;display:block\"\/><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/sg-live-01.slatic.net\/p\/6b12ea4ca9230f830ca871ccf56414d0.jpg\" style=\"width:100%;display:block\"\/><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/sg-live-01.slatic.net\/p\/37caa359ace1e257fa34e324c720e03d.jpg\" style=\"width:100%;display:block\"\/><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/sg-live-01.slatic.net\/p\/e086fca6470f29303719ce406bbfd160.jpg\" style=\"width:100%;display:block\"\/><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/sg-live-01.slatic.net\/p\/e26fc7cb1a96ee532dc48090f91da64d.jpg\" style=\"width:100%;display:block\"\/><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/sg-live-01.slatic.net\/p\/f4be88265d7438d6d398246451931b85.jpg\" style=\"width:100%;display:block\"\/><\/div><\/div><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/static-01.daraz.pk\/p\/ef9faf94f748347a29de5d0d4f74e861.png\" style=\"width:100%;display:block\"\/><\/div><\/div><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/static-01.daraz.pk\/p\/39a045785af81338f73abe1ebc463beb.png\" style=\"width:100%;display:block\"\/><\/div><\/div><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/static-01.daraz.pk\/p\/b5ce9bf5035dc9126ee8f76e9fc0831e.png\" style=\"width:100%;display:block\"\/><\/div><\/div><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block;margin:0;padding:8px 0;white-space:pre-wrap\"><div style=\"width:100%;display:block\"><img class=\"\" src=\"https:\/\/static-01.daraz.pk\/p\/4fc560faa9ed72a6e5be1081ff16d06b.png\" style=\"width:100%;display:block\"\/><\/div><\/div><\/div><\/div><div style=\"width:100%;margin:0;padding:8px 0;white-space:pre-wrap\"><span><\/span><\/div>",
  "images": [
    {
      "url": "https:\/\/static-01.daraz.pk\/p\/c53a4d36cb91b664e8d1e563d517f2fe.jpg",
      "variant": "0"
    },
    {
      "url": "https:\/\/static-01.daraz.pk\/p\/f9984b33ac2e71ccfb282901a34bc684.png",
      "variant": "0"
    },
    {
      "url": "https:\/\/static-01.daraz.pk\/p\/mdc\/b5ce9bf5035dc9126ee8f76e9fc0831e.png",
      "variant": "0"
    },
    {
      "url": "https:\/\/static-01.daraz.pk\/p\/mdc\/f6462fb1c1aa1c7dfa00aa96f5798734.png",
      "variant": "0"
    },
    {
      "url": "https:\/\/static-01.daraz.pk\/p\/mdc\/26d3aadfd62f3a18c5564464c273a31b.png",
      "variant": "0"
    },
    {
      "url": "https:\/\/static-01.daraz.pk\/p\/37caa359ace1e257fa34e324c720e03d.jpg",
      "variant": "0"
    }
  ],
  "variants": [
    {
      "id": 1295281360,
      "options": [],
      "availableForSale": true,
      "boxContent": "1 x Qualcomm Car charger 3.0",
      "features": {
        "Brand": "No Brand",
        "SKU": "134942387_PK-1295281360",
        "Number of Ports": "2",
        "Cable Included": "No",
        "Output Power": "12v",
        "Charging Interface": "USB",
        "Express delivery": "Karachi",
        "Model": "3.0 Qualcom"
      }
    }
  ],
  "price": {
    "value": 456,
    "currencyCode": "PKR",
    "retailPrice": 0,
    "salePrice": 456,
    "_kn_tracking_original_price": 380,
    "_kn_percentage_raised": 1.1999999999999999555910790149937383830547332763671875
  },
  "sku": "1295281360",
  "slug": "Qualcomm Original Car Charger QC 3.0\/2.0 100% Genuine Fast Charging Port with Blue Lights, Car Charging Best Fitted Spot, New without Box-1295281360",
  "options": [
    {
      "__typename": "MultipleChoiceOption",
      "id": "30129",
      "displayName": "\u0631\u0646\u06af",
      "values": [
        {
          "label": "White",
          "hexColors": null,
          "image": "https:\/\/static-01.daraz.pk\/p\/f9984b33ac2e71ccfb282901a34bc684.png"
        }
      ]
    }
  ]
}
