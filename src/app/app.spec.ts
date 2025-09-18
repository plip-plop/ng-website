import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
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
    const productDebugElements = fixture.debugElement.queryAll(
      By.directive(ProductCard)
    );

    expect(productDebugElements).toHaveSize(4);

    productDebugElements.forEach((productDebugElement, index) => {
      const productComponent: ProductCard =
        productDebugElement.componentInstance;
      expect(productComponent.product()).toBe(component.products[index]);
    });
  });

  it('It should update the total when "addToBasket" class method is called', () => {
    // Given
    component.total = 99;

    // When
    component.addToBasket(component.products[1]);

    // Then
    expect(component.total).toBe(99 + component.products[1].price);
  });
});
