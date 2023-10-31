import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-handle',
  templateUrl: './code-handle.component.html',
  styleUrls: ['./code-handle.component.css']
})
export class CodeHandleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const code = params.get('code');
      console.log(code);
    

      if (code) {
        // Now, you can make an API call using the 'code' parameter
        this.makeApiCall(code);
      }else{
        this.router.navigate(['/home']); // Replace 'profile' with your profile page route

      }
    });
  }

  makeApiCall(code: string) {
    const url = 'http://localhost:3000/createToken';
     // Replace with your API endpoint
     
    const body = { code: code };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, body, { headers }).subscribe((response) => {
      // Handle the API response here
      let token=response;
      if(response){
          localStorage.setItem('apiResponse', JSON.stringify(response));
          this.router.navigate(['/profile']); // Replace 'profile' with your profile page route

    // Redirect to the profile page
      }
      console.log('API Response:',response  );
    });
  }
}