import { Component } from '@angular/core';
import { AddAStatement } from "../../components/add-a-statement/add-a-statement";
import { CommonModule } from '@angular/common';
import { InquiryAboutRejected } from '../../components/inquiry-about-rejected/inquiry-about-rejected';
import { InquiryAboutStatement } from '../../components/inquiry-about-statement/inquiry-about-statement';
import { ActivatedRoute, Router } from '@angular/router';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-custody-page',
  imports: [CommonModule, AddAStatement,InquiryAboutRejected,InquiryAboutStatement,GoBack],
  templateUrl: './custody-page.html',
  styleUrl: './custody-page.css'
})
export class CustodyPage {
activeTab: string = 'add';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.activeTab = params['tab'];
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([], {
      queryParams: { tab },
      queryParamsHandling: 'merge'
    });
  }
}
