package studentdatabaseapp;

public class Student {
	private String etuNimi;
	private String sukuNimi;
	private int opiskeluVuosi;
	private String oppilasID;
	private String kurssit = "";
	private static int tunnus = 1000;
	
	// constructor kysyy oppilaan tietoja
	public Student() {
		Scanner in = new Scanner(System.in);
		System.out.print("Syötä oppilaan etunimi: ");
		this.etuNimi = in.nextLine();
		
		System.out.print("Syötä oppilaan sukunimi: ");
		this.sukuNimi = in.nextLine();
		
		System.out.print("Monennenko vuoden opiskelija? Käytä kokonaislukua: ");
		this.opiskeluVuosi = in.nextInt();
		
		setOppilasID();
	}
	
	// luo ID:n oppilaalle
	private void setOppilasID() {
		// tunnus = opiskeluvuosien määrä + tunnus
		tunnus++;
		this.oppilasID = opiskeluVuosi + "" + tunnus;
	}
	
	// liittää oppilaan kurssille
	public void kurssiRekisterointi() {
		// toistolauseke kunnes syötetään q
		do {
			System.out.print("Mille kurssille haluat rekisteröityä (Q lopettaaksesi): ");
			Scanner in = new Scanner(System.in);
			String kurssisyote = in.nextLine();
			if (!kurssisyote.equals("Q")) {
				kurssit = kurssit + "\n " + kurssisyote;
			}
			else { 
				break;
			}
		} while (1 != 0);

	}
	
	// näyttää oppilaan tiedot ja statuksen
	public String toString() {
		return "Nimi: " + etuNimi + " " + sukuNimi +
			"\nOpiskeluvuosi: " + opiskeluVuosi +
			"\nOpiskelijatunnus: " + oppilasID +
			"\nRekisteröitynyt kursseille: " + kurssit;
	}
}