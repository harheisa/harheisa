/**
 * testataan omaa java-osaamista fizzbuzzilla
 * tulostetaan numerot 1-100, korvataan numero sanalla fizz, buzz tai fizzbuzz
 * jos jaollinen 5:llä, 6:lla tai molemmilla
 * Created by Harri on 13.12.2021.
 */
import java.lang.*;

public class FizzBuzz {

        public static void main(String[] args)
        {
            // metodi fizzBuzz käy läpi luvut 1-100
            fizzBuzz(100);
        }

        private static void fizzBuzz(int num)
        {
            //metodi toimii toistorakenne for-lausekkeella
            for (int i = 1; i <= num; i++)
            {
                if (((i % 5) == 0) && ((i % 6) == 0)) // tarkistetaan jakojäännöksellä jaettavuus 5:llä ja 6:lla
                    System.out.println("fizzbuzz"); // jos ehto toteutuu, tulostetaan fizzbuzz
                else if ((i % 5) == 0) // jaetaan 5:llä, onko jakojäännös 0
                    System.out.println("fizz"); // jos tosi, tulostetaan fizz
                else if ((i % 6) == 0) // jaetaan 6:lla, onko jakojäännös 0
                    System.out.println("buzz"); // jos tosi, tulostetaan buzz
                else
                    System.out.println(i); // muutoin tulostetaan pelkkä numero
            }
        }
    }
