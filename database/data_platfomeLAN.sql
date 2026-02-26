USE plaformeLAN;

-- ROLES
INSERT INTO Roles (name)
VALUES
('admin'),
('organisateur'),
('joueur');

-- USERS
INSERT INTO Users (lastname, firstname, pseudo, birthdate, passeword, email, role_id)
VALUES
('Clerc', 'Gatien', 'GatiX', '2000-05-14', 'Pa$$w0rd', 'gatien@test.ch', 1),
('Martin', 'Lucas', 'Luuuuu', '2002-11-02', 'Pa$$w0rd', 'lucas@test.ch', 3),
('Dupont', 'Anna', 'Annou', '1998-07-22', 'Pa$$w0rd', 'anna@test.ch', 3),
('Steiner', 'Max', 'Maxi', '1995-03-11', 'Pa$$w0rd', 'max@test.ch', 2);

-- LANs
INSERT INTO LANs (name, date, location, max_participants)
VALUES
('WinterLAN', '2026-03-10', 'Yverdon-les-Bains', 40),
('SummerFragFest', '2026-07-22', 'Lausanne', 80);

-- USERS TAKE PART IN LANS
INSERT INTO Users_take_part_in_LANs (user_id, LAN_id)
VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 1);