
package com.beer;

public class Application {

    public static void main(String[] args) {
        String token = DigestUtilKt.generateXSign();
        System.out.println(token);
    }
}
