# Hashing for IoT
**Hash Basics**


A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are usually used to index a fixed-size table called a hash table (hash map). Use of a hash function to index a hash table is called hashing or scatter storage addressing.
https://en.wikipedia.org/wiki/Hash_function 
<br />
A small phone book as a hash table
https://en.wikipedia.org/wiki/Hash_table#/media/File:Hash_table_3_1_1_0_1_0_0_SP.svg
<br /><br />
Hashing data is a common practice in computer science and is used for several different purposes. Examples include cryptography, compression, checksum generation, and data indexing. https://techterms.com/definition/hash
<br /><br />
The number of interconnected everyday devices continues to grow and constitutes the Internet of Things (IoT).

Most of these devices do collect data. The data collected is stored in online using web services that sometimes run without any specific security and privacy concerns.

1. OAuth
OAuth (Open Standard Authentication). It is a common protocol which allows social services to communicate with each other and providing a safe way to share personal data.

It offers a Web application framework which gives third parties access to their resources without sharing credentials with their clients.

On its next version after the initial authorisation, a token based approach was implemented. It was to organize and authorize the interaction between the Assets proprietor and HTTP (Hyper Text Transfer Protocol) service.

2. Form Based Authentication
Form based authentication is a online networked computer systems based on the Web and the Internet.

In general, it refers to the idea that a user has an editable “file” to fill in and send for logging into some program or service.

In fact, the notion of using certain kinds of information that you enter is a technique that is not specific to the Internet is vague.

3. REST (Representational state transfer)
Representative State Transfer (REST) is an architectural style of software which defines a set of constraints to be used to build Web services.

Web services that conform to the architectural style of REST, called RESTful Web services. It provides interoperability over the Internet between computer systems.

The IoT is about to become the next major technical hype. Every day new services appear which make use of IoT devices. These new services are using web based storage, and the IoT devices are beginning to interact with such web storage.

From such a scenario, two problems arise:

Privacy and control of the data collected<br />
Low bit authentication for end to end devices.
https://iot4beginners.com/hashing-in-iot/
<br />


**Hash algorithms**

Some hash functions, such as message-digest algorithm (MD) series (MD4 and its strengthened variant MD5) and secure hash algorithm (SHA-0 and SHA-1), were widely used, however, broken in practice.

Here is a short horror movie:
Cracking a 2001 era MD5 password hash using 2016 hardware
https://www.youtube.com/watch?v=bS1YC-27pLc

oclHashcat is a GPGPU-based multi-hash cracker using a brute-force attack (implemented as mask attack), combinator attack, dictionary attack, hybrid attack, mask attack, and rule-based attack.

Considering the potential danger of being attacked for SHA-2, in 2008, the National Institute of Standards and Technology (NIST) started the NIST hash competition to develop the future hash standard SHA-3. https://csrc.nist.gov/projects/hash-functions/sha-3-project

SHA-3 was known as Keccak and is a hash function designed by Guido Bertoni, Joan Daemen, Michaël Peeters, and Gilles Van Assche. MD5 and SHA-0 have been shown to be susceptible to attacks, along with theoretical attacks on SHA-1. NIST thus defined there was a need for a new hashing method which did not use the existing methods for hashing, and a competition for competing algorithms.

In October 2012, Keccak won the NIST hash function competition and is proposed as the SHA-3 standard. It should be noted that it is not a replacement of SHA-2, which is currently a secure method. Overall Keccak uses the sponge construction where the message blocks are XORed into the initial bits of the state, and then inevitably permuted.


High Performance and Low Power Hardware Implementation for Cryptographic Hash Functions
https://journals.sagepub.com/doi/full/10.1155/2014/736312

SHA-3 for IoT
https://medium.com/asecuritysite-when-bob-met-alice/iot-goes-to-the-disco-bb03900157eb

Python hashlib — Secure hashes and message digests
https://docs.python.org/3/library/hashlib.html



<br />
<br />
Thank you!



