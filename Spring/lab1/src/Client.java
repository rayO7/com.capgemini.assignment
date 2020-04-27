

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext ac=new ClassPathXmlApplicationContext("Bean.xml");
		
		SBU obj=(SBU) ac.getBean("employee");
		System.out.println("SBU DETAILS");
		System.out.println("NAME: "+obj.getSbuName());
		System.out.println("CODE: "+obj.getSbuCode());
		System.out.println("HEAD: "+obj.getSbuHead());
		
		System.out.println();
		//obj.displayInfo();
//		Scanner sc=new Scanner(System.in);
//		System.out.println("\nEnter id:");
//		int a=sc.nextInt();
		obj.empDisplay(12);

	}

}
