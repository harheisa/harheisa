// youtubesta opittua

package studentdatabaseapp;

import java.util.Scanner;

public class StudentDatabaseApp {
	public static void main(String[] args) {
		// kysytään montako oppilasta lisätään
		System.out.print("Montako oppilasta lisätään rekisteriin: ");
		Scanner in = new Scanner(System.in);
		int oppilasMaara = in.nextInt();
		Student[] oppilaat = new Student[oppilasMaara];
		
		// lisätään n määrä uusia oppilaita
		for (int n = 0; n < oppilasMaara; n++) {
			oppilaat[n] = new Student();
			oppilaat[n].kurssiRekisterointi();
		}
		
		for (int n = 0; n < oppilasMaara; n++) {
			System.out.println(oppilaat[n].toString());
		}
	}
}