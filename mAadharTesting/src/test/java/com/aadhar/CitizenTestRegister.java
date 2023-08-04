package com.aadhar;

import java.time.Duration;
import java.util.concurrent.TimeoutException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CitizenTestRegister {

	public static WebDriver driver;
	
	@BeforeMethod
	public void setup() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test(priority=1)
	public void RegisterCitizen() throws Exception {
		driver.get("http://localhost:4200/citizenRegister");
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		driver.findElement(By.id("name")).sendKeys("Citizen 1",Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.id("dob")).sendKeys("2001-10-11",Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.id("email")).sendKeys("citizen@gmail.com",Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.id("address")).sendKeys("B1,3rd street,xyz nagar,Abc",Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.id("mobileno")).sendKeys("9876543210",Keys.ENTER);
		Thread.sleep(2000);
		driver.findElement(By.id("gender")).sendKeys("Female",Keys.ENTER);
		Thread.sleep(8000);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(), 'Register')]")));
		element.click();
		System.out.println(element);
	}

	
	
	@AfterMethod
	public void quit() throws InterruptedException {
		Thread.sleep(2000);
		driver.quit();
	}
}
