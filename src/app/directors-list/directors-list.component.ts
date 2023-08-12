import { Component } from '@angular/core';
import { DirectorServiceService } from '../services/director-service.service';
import { Director } from '../director';

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  styleUrls: ['./directors-list.component.scss']
})
export class DirectorsListComponent {
  directors: Director[] = [];

  constructor(private directorService: DirectorServiceService) {
  }

  ngOnInit() {
    this.directorService.findAll().subscribe(data => {
      this.directors = data;
    });
  }
}
