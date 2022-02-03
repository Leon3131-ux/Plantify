import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {

  search = new FormGroup( {
    shadow: new FormControl(''),
    height: new FormControl(''),
    season_to_bloom: new FormControl(''),
    humidity: new FormControl(''),
    altitude: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  runSearch(){
    this.router.navigate(['result', this.search.getRawValue()]);
  }

}
