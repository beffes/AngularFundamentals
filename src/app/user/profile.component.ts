import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    const firstName = new FormControl(this.authService.currentUser.firstname);
    const lastName = new FormControl(this.authService.currentUser.lastname);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
