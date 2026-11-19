<?php
// Bayan Alharbi - 2305950
// Lab 10, question 2: I translated the class diagram (Person and Professor) into PHP
// and wrote a small demo at the bottom to test it.

// Person class from the diagram
class Person
{
    // the red minus in the diagram means private, so only this class can touch it
    private string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    // speak() is public (green plus in the diagram)
    public function speak()
    {
        echo $this->name . " is speaking.<br>";
    }

    // because name is private, I need this getter to read it from outside
    public function getName(): string
    {
        return $this->name;
    }
}

// the arrow in the diagram goes from Professor to Person, so Professor extends Person
class Professor extends Person
{
    private float $salary;

    public function __construct(string $name, float $salary)
    {
        // parent::__construct fills the name that Person keeps
        parent::__construct($name);
        $this->salary = $salary;
    }

    public function Teach()
    {
        // Professor can't use $name directly (it is private), so it calls getName()
        echo $this->getName() . " is teaching.<br>";
    }
}

// ---------- demo ----------
$person = new Person("Sara");
$person->speak();
echo "Name: " . $person->getName() . "<br><br>";

$professor = new Professor("Dr. Ahmed", 15000.5);
// speak() and getName() are inherited from Person
$professor->speak();
echo "Name: " . $professor->getName() . "<br>";
$professor->Teach();
