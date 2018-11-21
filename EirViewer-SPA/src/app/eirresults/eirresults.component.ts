import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { GateService } from './../_services/gate.service';
import { Gate } from '../_models/gate';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eirresults',
  templateUrl: './eirresults.component.html',
  styleUrls: ['./eirresults.component.css']
})
export class EirresultsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  gate: Gate[];

  primaryUnit: Gate;
  matedUnit: Gate;
  relatedUnit: Gate;

  constructor(private gateService: GateService, private route: ActivatedRoute) {}

  ngOnInit() {

     this.route.data.subscribe(data => {
      this.gate = data['gate'];
     });

    // this.gate = this.gateService.getGateEirResult();

     for (let i = 0; i < this.gate.length; i++) {
      if (+this.gate[i].igEquipmentType === 2 || +this.gate[i].igEquipmentType === 3) {
        console.log('primary1: ' + this.gate[i].igUnitId);
        this.primaryUnit = this.gate[i];
      } else if (+this.gate[i].igEquipmentType === 1 && this.gate.length === 1) {
        this.primaryUnit = this.gate[i];
        console.log('primary2: ' + this.gate[i].igUnitId);
      } else if (+this.gate[i].igEquipmentType === 1 && i > 0) {
        this.matedUnit = this.gate[i];
        console.log('mated1: ' + this.gate[i].igUnitId);
      } else if (+this.gate[i].igEquipmentType === 4 && this.gate.length > 2) {
        this.relatedUnit = this.gate[i];
        console.log('related1: ' + this.gate[i].igUnitId);
      } else {
        this.matedUnit = this.gate[i];
        console.log('mated2: ' + this.gate[i].igUnitId);
      }
    }

    // console.log('ClientID: ' + this.gate[0].igClientId);
    // console.log('Customer: ' + this.gate[0].customer.customerName);

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true,
        imageDescription: true
      }
    ];

    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];

    const pictureInfo = this.gateService.getPicutreInfo();

    for (let i = 0; i < pictureInfo.pictureUrl.length; i++) {
      imageUrls.push({
        small: pictureInfo.pictureUrl[i],
        medium: pictureInfo.pictureUrl[i],
        big: pictureInfo.pictureUrl[i],
        description: 'Taken on ' + pictureInfo.inDate
      });
    }

    // imageUrls.push ({
    //  small: 'http://cgi-dms.com/gp/308800/G01.jpg',
    //  medium: 'http://cgi-dms.com/gp/308800/G01.jpg',
    //  big: 'http://cgi-dms.com/gp/308800/G01.jpg',
    //  description: '308800 description'
    // });

    // imageUrls.push ({
    //  small: 'http://cgi-dms.com/gp/308800/signature.jpg',
    //  medium: 'http://cgi-dms.com/gp/308800/signature.jpg',
    //  big: 'http://cgi-dms.com/gp/308800/signature.jpg',
    //  description: 'signature description'
    // });

    return imageUrls;
  }
}
