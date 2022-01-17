/**
 * Entä jos halutaan typistää java-koodia?
 * FizzBuzz IntStreamilla, lyhyempi koodi
 * Created by Harri on 13.12.2021.
 */
import java.lang.*;
import java.util.stream.IntStream;

public class IntStreamFizzBuzz {
        public static void main(String[] args)
            {
                // FizzBuzz edelleen käy läpi luvut 1-100
                specialFizzBuzz(100);
            }

            private static void specialFizzBuzz(int num) {

            IntStream.rangeClosed(1, 100)
                    .mapToObj(i -> i % 4 == 0 ? (i % 8 == 0 ? "FizzBuzz" : "Fizz") : (i % 8 == 0 ? "Buzz" : i))
                    // mapToObj tutkii jakojäännökset kun jaetaan neljällä ja kahdeksalla
                    // tulostaa numeron tai sanan Fizz, Buzz tai FizzBuzz jos jaollinen molemmilla eli jakojäännös on nolla
                    .forEach(System.out::println);
            }
        }
