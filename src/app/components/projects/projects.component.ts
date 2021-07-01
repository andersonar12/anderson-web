import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

declare var Swal: any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @Input('images') images: [];

  intervalSub: Subscription

  selectIndex: number = 0

  constructor() {}
  
  ngOnInit() {
    this.tabsAutoPlay()

  }
  
  imagePreview(imagen: string) {
    Swal.fire({
      imageUrl: imagen,
      width: 'auto',
    });
  }
  
  selected(event){
    /* console.log(event); */
  }
  
  tabsAutoPlay(){
    this.intervalSub = interval(3000).subscribe(()=>{

    if (this.images.length - 1 == this.selectIndex) {
      this.selectIndex = 0
      return
    }

    this.selectIndex++
  
  })

  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe()
   /*  console.log('Interval Cleaned'); */
  }
}
