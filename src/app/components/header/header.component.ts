import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/SearchService';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TaskListComponent, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchText: string = '';

  constructor(private searchService: SearchService,private router:Router) {}

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.updateSearchText(input.value);
  }

  onSignOut(): void {

    sessionStorage.removeItem('isloggIn');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, sign out!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('User signed out'); 
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have been signed out successfully.",
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          this.router.navigate(['/login'])
        })
        // Swal.fire(

        //   'Signed Out!',
        //   'You have been signed out successfully.',
        //   'success'
        // ).then((res)=>{
        //   if(res.isConfirmed){
        //     this.router.navigate(['/login'])
        //   }
        // })
        
      }
    })
     
    

    ;
  }
}
