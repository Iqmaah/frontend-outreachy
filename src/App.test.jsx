import { render, screen, fireEvent } from '@testing-library/react'; 
import { expect, describe, it } from 'vitest';
import App from './App'; 


describe('App', () => {
    it('should change background color when the color buttons are clicked', () => {
        render(<App />);
      
        // Get the color buttons by their test IDs
        const whiteButton = screen.getByTestId('color-button-white');
        const brownButton = screen.getByTestId('color-button-brown');
        const yellowButton = screen.getByTestId('color-button-yellow');
      
        // Simulate a button click that changes the background color
        fireEvent.click(whiteButton);
      
        // Use getComputedStyle to check the background color
        const bodyStyle = window.getComputedStyle(document.body);
        expect(bodyStyle.backgroundColor).toBe('rgb(255, 255, 255)'); 
      
        fireEvent.click(brownButton);
        const bodyStyleBrown = window.getComputedStyle(document.body);
        expect(bodyStyleBrown.backgroundColor).toBe('rgb(128, 71, 28)'); 
      
        fireEvent.click(yellowButton);
        const bodyStyleYellow = window.getComputedStyle(document.body);
        expect(bodyStyleYellow.backgroundColor).toBe('rgb(240, 215, 138)'); 
      });
      

      it('should change background image when the image buttons are clicked', () => {
        render(<App />);
      
        // Get the image buttons by their test IDs
        const img1Button = screen.getByTestId('img1-btn');
        const img2Button = screen.getByTestId('img2-btn');
        const img3Button = screen.getByTestId('img3-btn');
      
        // Get the background div
        const backgroundDiv = screen.getByTestId('background-div');
      
        // Simulate button clicks to change the background image
        fireEvent.click(img1Button);
        
        // Check if the image URL contains the expected path
        expect(backgroundDiv.style.backgroundImage).toContain('/src/assets/img1.jpg'); 
      
        fireEvent.click(img2Button);
        expect(backgroundDiv.style.backgroundImage).toContain('/src/assets/img2.jpg'); 
      
        fireEvent.click(img3Button);
        expect(backgroundDiv.style.backgroundImage).toContain('/src/assets/img3.jpg'); 
      });
      
});










