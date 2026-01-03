import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsBalances } from './accounts-balances';

describe('AccountsBalances', () => {
  let component: AccountsBalances;
  let fixture: ComponentFixture<AccountsBalances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsBalances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsBalances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
