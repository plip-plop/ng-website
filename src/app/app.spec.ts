import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';
import { ProductCard } from './components/product-card/product-card';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the products', () => {
    // Par debugElement...
    const products = fixture.debugElement.queryAll(By.directive(ProductCard));
    // ...OU par nativeElement
    const products2 = (fixture.nativeElement as HTMLElement).querySelectorAll('app-product-card');

    expect(products).toHaveSize(4);
    expect(products2).toHaveSize(4);
  });

  it('should update the total when "addToBasket" class method is called', () => {});
});
