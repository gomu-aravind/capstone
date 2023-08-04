package com.aadhar;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CitizenTestLogin {

	static WebDriver webdriver = null;

	@Test
	public void ChromeBrowser() {
		WebDriverManager.chromedriver().setup();
		webdriver = new ChromeDriver();
		webdriver.manage().window().maximize();
		System.out.println("Chrome Browser is Opened!!");
		
	}
	
	
	@Test
	public void CitizenCheck() throws InterruptedException {
		webdriver.get("http://localhost:4200/citizenLogin");
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		webdriver.findElement(By.id("email")).sendKeys("citizen@gmail.com");
		webdriver.findElement(By.id("password")).sendKeys("9876543210");
		Thread.sleep(3000);
		webdriver.findElement(By.xpath("//button[normalize-space()='Login']")).click();
		Thread.sleep(2000);
		webdriver.quit();
		
	}
	
}
