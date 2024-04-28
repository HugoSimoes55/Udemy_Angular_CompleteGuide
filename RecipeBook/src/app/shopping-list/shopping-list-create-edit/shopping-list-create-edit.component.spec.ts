import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListCreateEditComponent } from './shopping-list-create-edit.component';

describe('ShoppingListCreateEditComponent', () => {
  let component: ShoppingListCreateEditComponent;
  let fixture: ComponentFixture<ShoppingListCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListCreateEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingListCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
