import { Category } from 'src/app/model/Category';
import { Task } from './../model/Task';
import { Injectable } from '@angular/core';
import { TestData } from '../data/TestData';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject <Task[]> (TestData.tasks)
  categoriesSubject = new BehaviorSubject <Category[]> (TestData.categories)


  constructor() {
    this.fillTasks()
  }


  fillTasks(){
    this.tasksSubject.next(TestData.tasks)
  }

  fillTasksByCategory(oneCategory: Category){
    const filteredCategory = TestData.tasks.filter(value => value.category === oneCategory);
    // console.log(filteredCategory)
    this.tasksSubject.next(filteredCategory)
  }


  getCategory(): Category[] {
    return TestData.categories;
  }

  getTask(): Task[] {
    return TestData.tasks
  }

  getTasksByCategory(oneCategory: Category): Task[] {
    const sellectedCategory = TestData.tasks.filter(value => value.category === oneCategory);
    console.log(sellectedCategory)
    return sellectedCategory;
  }
}
