import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import {Task} from "../../model/Task";
import {TestData} from "../../data/TestData";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[]
  public sellectedCategory: Category

  constructor( private dataHandler: DataHandlerService) {
    
  }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(catgories => this.categories = catgories)
  }

  showTasksByCategory(oneCategory: Category) {
    this.sellectedCategory = oneCategory
    this.dataHandler.fillTasksByCategory(oneCategory);
  }
}
