package com.betrybe.tech;

public class Application {

  public static void main(String[] args) {
    Laptop laptop = new Laptop("Samsung", 100, 14);
    Desktop desktop = new Desktop("Dell", 500);

    checkDevice(laptop);
    checkDevice(desktop);

    PowerBank powerBank = new PowerBank();

    plugDevice(laptop);
    plugDevice(powerBank);

    Laptop myLaptop = new Laptop("Dell", 512.0, 15.6);
    ComputerDevice myDevice = myLaptop; // upcasting

    ComputerDevice genericDevice = new Laptop("Apple", 256.0, 13.3);
    if (genericDevice instanceof Laptop) {
      Laptop specificLaptop = (Laptop) genericDevice; // downcasting seguro
    }
  }

  public static void checkDevice(ComputerDevice device) {
    System.out.println("Verificando dispositivo de marca " + device.getBrand());
    device.bootUp();
  }

  public static void plugDevice(Chargeable chargeable) {
    System.out.println("A bateria atual é " + chargeable.getBatteryLevel());
    chargeable.charge();
  }
}
