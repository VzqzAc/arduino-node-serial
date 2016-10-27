void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello world");
  analogWrite(13, HIGH); // physical knowledge of working serial communication
  delay(500);
  analogWrite(13, LOW); // see above comment
  delay(500);
asdasddadssd
}
