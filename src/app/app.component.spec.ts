import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> 427e3441ed06a59997752dfbdbfb098387df602b
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [RouterTestingModule],
=======
>>>>>>> 427e3441ed06a59997752dfbdbfb098387df602b
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'hotel-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hotel-app');
=======
  it(`should have as title 'appointment-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('appointment-app');
>>>>>>> 427e3441ed06a59997752dfbdbfb098387df602b
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('hotel-app app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('appointment-app app is running!');
>>>>>>> 427e3441ed06a59997752dfbdbfb098387df602b
  });
});
