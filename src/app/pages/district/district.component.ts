import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  constructor(private a:HeroService,private router:Router){}
  database=this.a.getdata();
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])
  }

}
