import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Task } from './../../model/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[]

  constructor(private dataHandler: DataHandlerService)  { 

  }

  ngOnInit() {
     this.dataHandler.tasksSubject.subscribe(
         (filteredCategory) => this.tasks = filteredCategory
     )

      // this.tasks = this.dataHandler.getTask()
      // this.tasks = this.dataHandler.getTask()
      // console.dir(this.tasks)

  }

  toggleTaskCompleted(allTasks: Task){
      allTasks.completed = !allTasks.completed
  }

}
