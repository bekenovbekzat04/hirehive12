import { Component } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  companies: any[]= [
    {
      id: '123e4567-e89b-12d3-a456-426655440000',
      user: { /* объект User */ },
      name: 'My Company',
      location: 'New York, NY',
      website: 'https://www.mycompany.com',
      description: 'We make great things!',
      logo: 'company_logos/mycompanylogo.jpg'
    },
    {
      id: '123e4567-e89b-12d3-a456-426655440001',
      user: { /* объект User */ },
      name: 'Another Company',
      location: 'San Francisco, CA',
      website: 'https://www.anothercompany.com',
      description: 'We make even greater things!',
      logo: 'company_logos/anothercompanylogo.jpg'
    },
    {
      id: '123e4567-e89b-12d3-a456-426655440002',
      user: { /* объект User */ },
      name: 'Third Company',
      location: 'Chicago, IL',
      website: 'https://www.thirdcompany.com',
      description: 'We make amazing things!',
      logo: 'company_logos/thirdcompanylogo.jpg'
    },
    // ...
  ];

  constructor(private companyService: CompanyService) {
    this.companies = []= [
      {
        id: '123e4567-e89b-12d3-a456-426655440000',
        user: { /* объект User */ },
        name: 'My Company',
        location: 'New York, NY',
        website: 'https://www.mycompany.com',
        description: 'We make great things!',
        logo: 'company_logos/mycompanylogo.jpg'
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440001',
        user: { /* объект User */ },
        name: 'Another Company',
        location: 'San Francisco, CA',
        website: 'https://www.anothercompany.com',
        description: 'We make even greater things!',
        logo: 'company_logos/anothercompanylogo.jpg'
      },
      {
        id: '123e4567-e89b-12d3-a456-426655440002',
        user: { /* объект User */ },
        name: 'Third Company',
        location: 'Chicago, IL',
        website: 'https://www.thirdcompany.com',
        description: 'We make amazing things!',
        logo: 'company_logos/thirdcompanylogo.jpg'
      },
      // ...
    ];
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    // @ts-ignore
    this.companyService.getCompanies().subscribe((companies: any[]) => {this.companies = companies});
    console.log(this.companies)
  }


}
