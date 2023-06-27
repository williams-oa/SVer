// Defining wallet details for each student. IDs here match the IDs for students in the html doc
const students = [
    {
      privateKey: "L1iErRiQxi4bzm3sfXMVANJYtn6HsgFPrrZzbDE6uDmCbPEcG4Qb",
      privateKeyId: "#privKey1",
      publicKeyId: "#pubKey1",
      addressId: "#address1"
    },
    {
      privateKey: "KxMWpYRpfdSJyKfRgTt7KkgBJaUJkDpzRbwFR1m2h5amxCWhv3Di",
      privateKeyId: "#privKey2",
      publicKeyId: "#pubKey2",
      addressId: "#address2"
    },
    {
      privateKey: "L2Y7ntwTA48C9Drwo8sTx457qjuKJGvKnqMX3Y99w8tJwGRAeNLG",
      privateKeyId: "#privKey3",
      publicKeyId: "#pubKey3",
      addressId: "#address3"
    },
    {
      privateKey: "Kz77tHxP1fczREA7LTDf3Y1c16qiwkuhYAgoLQaXmzJdwNz7erpM",
      privateKeyId: "#privKey4",
      publicKeyId: "#pubKey4",
      addressId: "#address4"
    },
    {
      privateKey: "L2Ras7FcyCTkHENSrUThduKjmPtiNG2KKNCnuHiBxwnBm8iU1o1b",
      privateKeyId: "#privKey5",
      publicKeyId: "#pubKey5",
      addressId: "#address5"
    },
    {
      privateKey: "Kwm7fJFw7XGZQDvjVW1p2k2Z3LJ8av6gGpN48AUbU3ZLvTY5nCxe",
      privateKeyId: "#privKey6",
      publicKeyId: "#pubKey6",
      addressId: "#address6"
    },
    {
      privateKey: "L1LwYMiBevKvDiRztUFRimujhrJXVx4FFehq6SM2AkTeTbxo8xmv",
      privateKeyId: "#privKey7",
      publicKeyId: "#pubKey7",
      addressId: "#address7"
    },
    {
      privateKey: "KwQdF5UGmbzKeNAQex6QR1sGyVvAvVdvEsaxSeAsy1mGAMraH1qX",
      privateKeyId: "#privKey8",
      publicKeyId: "#pubKey8",
      addressId: "#address8"
    },
    {
      privateKey: "L3EjSg9iSZEGHVfr5ZHdned2uoz6V8o5qesGcJi4sXbGM4BV76fS",
      privateKeyId: "#privKey9",
      publicKeyId: "#pubKey9",
      addressId: "#address9"
    },
    {
      privateKey: "KwnPkvnhxMtaC87qjkZh161ia6UeYeiqmF4jpQZVaqaurnkGSga1",
      privateKeyId: "#privKey10",
      publicKeyId: "#pubKey10",
      addressId: "#address10"
    },
    {
      privateKey: "L3ySkXSCzrBiArGVis5cN3UR48XW1YmkdfG8gAJaJWbTy4ZnNvrb",
      privateKeyId: "#privKey11",
      publicKeyId: "#pubKey11",
      addressId: "#address11"
    },
    {
      privateKey: "KykvWB4brQhRT3HYMTymwAczaWFKHs7i8owGEzrmdwCJvvmJHsh7",
      privateKeyId: "#privKey12",
      publicKeyId: "#pubKey12",
      addressId: "#address12"
    },
    {
      privateKey: "KzpdhVtSwTjTYXoTFijHy9aUPPqta5zGZje18fmiQUKUMT7f9qhu",
      privateKeyId: "#privKey13",
      publicKeyId: "#pubKey13",
      addressId: "#address13"
    },
    {
      privateKey: "KxLWezBc5EFPD9jy5ftnKWwaH1m1XJynSr1EBs31cSinUkz61cgW",
      privateKeyId: "#privKey14",
      publicKeyId: "#pubKey14",
      addressId: "#address14"
    },
    {
      privateKey: "L2qtCd9ZeYkNYfrqKZPV8TmG6TQVAe4Ec7xnVmKNyUMM8TdsxSeZ",
      privateKeyId: "#privKey15",
      publicKeyId: "#pubKey15",
      addressId: "#address15"
    },
    {
      privateKey: "KyApYdujL31LW9tppF7s43bYfrmPBi9rwUnUw8YEuyyaH5XJ8oFL",
      privateKeyId: "#privKey16",
      publicKeyId: "#pubKey16",
      addressId: "#address16"
    },
    {
      privateKey: "L3k6tB8L4zBbYDGsHAk2rq9WUrJc3zpJ6ZZPCP6K2rjzQkgkGULG",
      privateKeyId: "#privKey17",
      publicKeyId: "#pubKey17",
      addressId: "#address17"
    },
    {
      privateKey: "KytyJinxTj5LGgQBjj8WmTLQ1VwfhPDS1qftUGNdoB6SRKQrdSSN",
      privateKeyId: "#privKey18",
      publicKeyId: "#pubKey18",
      addressId: "#address18"
    },
    {
      privateKey: "L37zdcx9KSmQbW24swfsWCT9B6irNLfUF6fRdUTKdHtDVVkCZdgw",
      privateKeyId: "#privKey19",
      publicKeyId: "#pubKey19",
      addressId: "#address19"
    },
    {
      privateKey: "L2vUHbuHTfXQK7fYUaM3JAMSGAEF76Qk7pCHHcUpJXiUWqNqrwm8",
      privateKeyId: "#privKey20",
      publicKeyId: "#pubKey20",
      addressId: "#address20"
    }
  ];
  
  // Looping through each student and display their wallet details
  students.forEach((student, index) => {
    const privKey = bsv.PrivateKey.fromString(student.privateKey);
    const pubKey = bsv.PublicKey.fromPrivateKey(privKey);
    const address = bsv.Address.fromPublicKey(pubKey);
  
    //Editing each of the IDs here to display the private key, public key and address
    const p = document.querySelector(student.privateKeyId);
    p.innerHTML = `Private key - ${privKey.toString()}`;
  
    const y = document.querySelector(student.publicKeyId);
    y.innerHTML = `Public key - ${pubKey.toString()}`;
  
    const z = document.querySelector(student.addressId);
    z.innerHTML = `Address - ${address.toString()}`;
  });
  




