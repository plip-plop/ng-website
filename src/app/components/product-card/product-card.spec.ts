import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';

fdescribe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.componentRef.setInput('product', {
      description: 'DESC',
      title: 'My title',
      photo: 'photo',
      price: 20,
      stock: 2,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the product photo as image url', () => {
    // const image = nativeElement.querySelector('.card-img-top') as HTMLImageElement;
    const image = nativeElement.querySelector('img');

    expect(image?.src).toContain('photo');
  });

  it('It should display the product description', () => {
    const small = nativeElement.querySelector('small');

    expect(small?.textContent).toContain('DESC');
  });

  it('It should display the product title', () => {
    // TODO
  });

  it('It should display the product price', () => {
    // TODO
  });

  it('It should emit addToBasket event with the given product when the button is clicked', () => {
    const spy = spyOn(component.addToBasket, 'emit');
    nativeElement.querySelector('button')?.click();

    expect(spy).toHaveBeenCalledWith(component.product());
  });
});
