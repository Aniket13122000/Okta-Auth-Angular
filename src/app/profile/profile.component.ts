import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}
  apiResponse: any; // This property will hold the API response data

  ngOnInit(): void {
    const storedData = localStorage.getItem('apiResponse'); // Retrieve the object from local storage

    if (storedData) {
      // Parse the stored data as JSON
      const dataObject = JSON.parse(storedData);

      // Check if the 'access_token' property exists in the object
      if (dataObject.access_token) {
        const accessToken = dataObject.access_token;

        // If an access token is found in the object, make the API request
        this.makeApiRequest(accessToken);
      } else {
        // Handle the case when there is no 'access_token' property in the object
        console.error('No access token found in local storage object');
      }
    } else {
      // Handle the case when there is no data in local storage
      console.error('No data found in local storage');
    }
  }

  makeApiRequest(accessToken: string) {
    console.log(accessToken,'tokem');
    
   
    const apiUrl = 'http://localhost:3000/profile';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` });
    this.http.get(apiUrl, { headers }).subscribe((response) => {
      console.log('API Response:', response);
      this.apiResponse = response; // Store the API response in a component property

    });
  }
}
