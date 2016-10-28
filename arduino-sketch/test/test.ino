boolean led;
String a;

void setup() {
  Serial.begin(9600);
  a = "";
  digitalWrite(13, LOW);
  led = false;
}

void loop() {
  a = Serial.readString();
  Serial.println(a);
  if(a.equals("led")) {
    digitalWrite(13, toggleLed());
  }
  delay(2);
}

boolean toggleLed() {
  led = !led;
  return led;
}
