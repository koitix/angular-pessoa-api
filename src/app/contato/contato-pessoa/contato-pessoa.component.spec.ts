import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPessoaComponent } from './contato-pessoa.component';

describe('ContatoPessoaComponent', () => {
  let component: ContatoPessoaComponent;
  let fixture: ComponentFixture<ContatoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
