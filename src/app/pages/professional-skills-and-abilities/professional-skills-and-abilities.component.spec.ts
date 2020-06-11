import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillsAndAbilitiesComponent } from './professional-skills-and-abilities.component';

describe('ProfessionalSkillsAndAbilitiesComponent', () => {
  let component: ProfessionalSkillsAndAbilitiesComponent;
  let fixture: ComponentFixture<ProfessionalSkillsAndAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalSkillsAndAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSkillsAndAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
