package com.aadhar;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AdminTestLogin {

public static WebDriver driver;
	
	@BeforeClass()
	public void setup(){
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test
	public void Login() throws InterruptedException {
		driver.get("http://localhost:4200/adminLogin");
		Thread.sleep(2000);
		
		driver.findElement(By.id("email")).sendKeys("admin2@gmail.com");
		Thread.sleep(2000);
		driver.findElement(By.id("password")).sendKeys("Admin2@123");
		Thread.sleep(2000);
		
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		Thread.sleep(2000);
		driver.quit();
	}
	
}
