-- Bayan Alharbi - 2305950
-- CPIT-405 homework: database for my portfolio.
-- How to use: open phpMyAdmin > Import > choose this file > Go.

DROP DATABASE IF EXISTS cpit405_portfolio;
CREATE DATABASE cpit405_portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cpit405_portfolio;

-- ---------- tables ----------

CREATE TABLE labs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lab_number INT NOT NULL,
    topic VARCHAR(100) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'Completed',
    link VARCHAR(255) NOT NULL,
    link_text VARCHAR(20) NOT NULL DEFAULT 'Open'
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    link VARCHAR(255) NOT NULL DEFAULT '#'
);

CREATE TABLE education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(150) NOT NULL,
    university VARCHAR(150) NOT NULL,
    period VARCHAR(50) NOT NULL,
    gpa DECIMAL(3,2) NOT NULL
);

CREATE TABLE experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    organization VARCHAR(150) NOT NULL,
    period VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    sort_order INT NOT NULL
);

CREATE TABLE achievements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(400) NOT NULL
);

CREATE TABLE skill_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES skill_categories(id) ON DELETE CASCADE
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    message_type ENUM('Inquiry', 'Feedback') NOT NULL DEFAULT 'Inquiry',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------- sample data ----------

-- Labs 8 and 9 are on CodeSandbox.
INSERT INTO labs (lab_number, topic, status, link, link_text) VALUES
(1, 'Setup', 'Completed', 'lab1.php', 'Open'),
(2, 'HTML', 'Completed', 'lab2.php', 'Open'),
(3, 'CSS', 'Completed', 'lab3.php', 'Open'),
(5, 'DOM & JS Events', 'Completed', 'lab5.php', 'Open'),
(6, 'Cookies', 'Completed', 'lab6.php', 'Open'),
(7, 'Ajax (Unsplash API)', 'Completed', 'lab7.php', 'Open'),
(8, 'React (Link Shrinker)', 'Completed', 'https://codesandbox.io/p/sandbox/kj9t74', 'Open'),
(9, 'React APIs (Recipes)', 'Completed', 'https://codesandbox.io/p/sandbox/6dmj4v', 'Open'),
(10, 'PHP and MariaDB', 'Completed', 'https://github.com/bayanAlharbi0429/cpit-405-labs/tree/main/Labs/lab10-php', 'Source'),
(11, 'Ajax (PHP, JSON)', 'Completed', 'https://github.com/bayanAlharbi0429/cpit-405-labs/tree/main/Labs/lab11-ajax', 'Source');

INSERT INTO projects (name, description, link) VALUES
('Bonat App', 'UI/UX redesign of a loyalty app: new core flows, transaction and invoicing screens, and a Figma design system.', '#'),
('Boat Monitoring System', 'Real-time coastal safety system for Jeddah Municipality, with a full SRS and a color-coded pre-warning map.', '#');

INSERT INTO education (degree, university, period, gpa) VALUES
('Bachelor''s in Information Technology', 'King Abdulaziz University', '2023 – Present', 4.82);

INSERT INTO experience (title, organization, period, description, sort_order) VALUES
('Cooperative IT Intern', 'Emirate of Makkah Region', '07/2026 – 08/2026', 'Tested internal systems with end users, identified usability gaps, and worked as the link between users and the development team.', 1),
('UI/UX Design Intern', 'Bonat', '09/2025 – 03/2026', 'Delivered 50+ production-ready screens, from wireframes to high-fidelity prototypes, while keeping the brand consistent.', 2),
('UI/UX Design Intern', 'Khulasa', '08/2025 – 09/2025', 'Ran user research to find key pain points and improve core user flows.', 3),
('Co-Founder', 'Forsah', '05/2024 – 08/2025', 'Curated 400+ technical opportunities and designed 4 career roadmaps for students.', 4);

INSERT INTO achievements (text) VALUES
('Led the KAU Programming Club (90+ members) and ran 9 bootcamps for 1,000+ students.'),
('Head of Media & Marketing, FCIT Social Committee: grew engagement by 40% and directed the 2024 Orientation for 500+ attendees.'),
('Wrote a full SRS for a real-time Boat Monitoring System with Jeddah Municipality.');

INSERT INTO skill_categories (name) VALUES ('Programming'), ('UI/UX');

INSERT INTO skills (category_id, name) VALUES
(1, 'Java'), (1, 'Python'), (1, 'HTML'), (1, 'CSS'), (1, 'Git/GitHub'),
(2, 'Figma'), (2, 'Canva'), (2, 'Responsive Design'), (2, 'Wireframing');

-- one example message so the table is not empty
INSERT INTO messages (name, email, message, message_type) VALUES
('Test User', 'test@example.com', 'This is a sample message.', 'Feedback');
