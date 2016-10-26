void setup() {
  Serial.begin(9600);
  int sensorValue;
}

void loop() {
  sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  delay(2);
}
