(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{218:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"becoming-a-validator-wip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#becoming-a-validator-wip"}},[a._v("#")]),a._v(" Becoming a validator ("),s("strong",[a._v("WIP")]),a._v(")")]),a._v(" "),s("p",[a._v("Once you've properly set up a "),s("router-link",{attrs:{to:"/nodes/full-node-installation.html"}},[a._v("full node")]),a._v(", if you wish you can become a validator node and\nstart in earning by  validating  the chain transactions.")],1),a._v(" "),s("p",[a._v("Before you start, we recommend that you run the command")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli config chain-id "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("In this way you can omit the flag "),s("code",[a._v('--chain-id="$CHAINID"')]),a._v(" in every command of the "),s("strong",[a._v("cncli")])]),a._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("p",[a._v("If you want to become a Commercio.network validator you need to:")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Be a full node."),s("br"),a._v("\nIf you are not, please follow the "),s("router-link",{attrs:{to:"/nodes/full-node-installation.html"}},[a._v("full node installation guide")]),a._v(".")],1)]),a._v(" "),s("li",[s("p",[a._v("Own enough tokens."),s("br"),a._v("\nTo become a validator you need two wallets: one with at least one token to create the validator and another with 50,000 tokens to delegate to the validator node.")])])]),a._v(" "),s("h2",{attrs:{id:"_1-add-wallet-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-wallet-key"}},[a._v("#")]),a._v(" 1. Add wallet key")]),a._v(" "),s("p",[a._v("Inside the testnet you can use the ledger, but you can also use the wallet software with the "),s("code",[a._v("cncli")]),a._v("."),s("br"),a._v("\nHowever, if you wish to use Ledger, please add the "),s("code",[a._v("--ledger")]),a._v(" flat to any command.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Please remember to copy the 24 words seed phrase in a secure place."),s("br"),a._v("\nThey are your mnemonic and if you loose them you lose all your tokens and the whole access to your validator.")])]),a._v(" "),s("p",[a._v("Create the first wallet with the following command")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli keys "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Enter a password that you can remember")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Copy your public address. It should have the format "),s("code",[a._v("did:com:<data>")]),a._v(".")]),a._v(" "),s("p",[a._v("The second wallet must be requested through a message on the "),s("a",{attrs:{href:"https://t.me/commercionetworkvipsTelegram",target:"_blank",rel:"noopener noreferrer"}},[a._v("Telegram group"),s("OutboundLink")],1),a._v(". With a private message will be sent the information of the second wallet.")]),a._v(" "),s("p",[a._v("From now on we will refer to the value of your public address of the first wallet as "),s("code",[a._v("<your pub addr creator val>")]),a._v(" notation.\nWe will refer to the second wallet as "),s("code",[a._v("<your pub addr delegator>")]),a._v(" notation.")]),a._v(" "),s("h2",{attrs:{id:"_2-get-the-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-the-tokens"}},[a._v("#")]),a._v(" 2. Get the tokens")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#testnet"}},[a._v("Testnet")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#mainnet"}},[a._v("Mainnet")])])]),a._v(" "),s("h3",{attrs:{id:"testnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[a._v("#")]),a._v(" Testnet")]),a._v(" "),s("p",[a._v("In order to get  "),s("code",[a._v("<your pub addr creator val>")]),a._v(" you can use the following command:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli keys show "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v(" --address\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("From the command line")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://faucet-testnet.commercio.network/invite?addr=<your pub addr creator val>"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Or on a browser copy and paste the following address")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://faucet-testnet.commercio.network/invite?addr=<your pub addr creator val>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("The call should return something like")]),a._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tx_hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4AB05DF5BEB7321059A6724BF18A7B95631AB55773BBD55DFC448351101BE972"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Now you can request the token from faucet's service")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli keys show "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v(" --address\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("From the command line")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://faucet-testnet.commercio.network/give?addr=<your pub addr creator val>&amount=1100000"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Or on a browser copy and paste the following address")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://faucet-testnet.commercio.network/give?addr=<your pub addr creator val>&amount=1000000\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("The call should return something like")]),a._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tx_hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"BB733FDB2665265D3B3A32576F23B10B10EA8F56EEBAD08C1BF39D5E2FAC601C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Once you've been confirmed the successful transaction, please check using the following command:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli query account "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --chain-id "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("The output should look like this:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('- denom: ucommercio\n  amount: "1100000"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("When you have received the second wallet "),s("code",[a._v("<your pub addr delegator>")]),a._v(" via telegram message, check if the tokens are actually present")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli query account "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --chain-id "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("The output should look like this:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('- denom: ucommercio\n  amount: "5100000000"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"mainnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[a._v("#")]),a._v(" Mainnet")]),a._v(" "),s("p",[a._v("To get your tokens inside our mainnet, you are required to purchase them using an exchange or having received a black card."),s("br"),a._v(" "),s("strong",[a._v("The black card is the wallet "),s("code",[a._v("<your pub addr delegator>")])])]),a._v(" "),s("p",[a._v("Create the first wallet "),s("code",[a._v("<your pub addr creator val>")]),a._v(" with the command")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli keys "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Enter a password that you can remember")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("strong",[a._v("Use the ledger or another hsm to make a recovery from 24 words for the second wallet with the black card.")])]),a._v(" "),s("p",[a._v("Send one token to the first wallet using the following command")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("This transaction is expected to be done with an hsm as Ledger. If you are using a Ledger add the "),s("code",[a._v("--ledger")]),a._v(" flag.")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli tx send "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n1000000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("Once you've been confirmed the successful transaction, please check using the following command:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli query account "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --chain-id "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("The output should look like this:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('- denom: ucommercio\n  amount: "1000000"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"_3-create-a-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-validator"}},[a._v("#")]),a._v(" 3. Create a validator")]),a._v(" "),s("p",[a._v("Once you have the tokens, you can create a validator. If you want, while doing so you can also specify the following parameters")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("--details")]),a._v(": a brief description about your node or your company")]),a._v(" "),s("li",[s("code",[a._v("--identity")]),a._v(": your "),s("a",{attrs:{href:"https://keybase.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Keybase"),s("OutboundLink")],1),a._v(" identity")]),a._v(" "),s("li",[s("code",[a._v("--website")]),a._v(": a public website of your node or your company")])]),a._v(" "),s("p",[a._v("The overall command to create a validator is the following:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli tx staking create-validator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1000000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --pubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cnd tendermint show-validator"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --moniker"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NODENAME")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --identity"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" --website"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" --details"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v(" --commission-max-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.20"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-max-change-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(" --min-self-delegation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr creator val"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -y\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##Twice input password required")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("The output should look like this:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('height: 0\ntxhash: C41B87615308550F867D42BB404B64343CB62D453A69F11302A68B02FAFB557C\ncodespace: ""\ncode: 0\ndata: ""\nrawlog: \'[]\'\nlogs: []\ninfo: ""\ngaswanted: 0\ngasused: 0\ntx: null\ntimestamp: ""\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"_4-delegate-tokens-to-the-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-delegate-tokens-to-the-validator"}},[a._v("#")]),a._v(" 4. Delegate tokens to the validator")]),a._v(" "),s("h3",{attrs:{id:"confirm-your-validator-is-active"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#confirm-your-validator-is-active"}},[a._v("#")]),a._v(" Confirm your validator is active")]),a._v(" "),s("p",[a._v("Please confirm that your validator is active by running the following command:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli query staking validators --chain-id "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fgrep")]),a._v(" -B "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cnd tendermint show-validator"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Something like this")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  operatoraddress: did:com:valoper1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n  conspubkey: did:com:valconspub1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Copy the value of "),s("code",[a._v("operatoraddress")]),a._v(". Below we will refer to this value with "),s("code",[a._v("<validator-addr>")])]),a._v(" "),s("h3",{attrs:{id:"delegate-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delegate-tokens"}},[a._v("#")]),a._v(" Delegate tokens")]),a._v(" "),s("p",[a._v("Once received the second wallet must be loaded on the ledger or keyring through the command")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli keys "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name of second wallet"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --recover\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("where "),s("code",[a._v("<name of second wallet>")]),a._v(" is an arbitrary name."),s("br"),a._v("\nWhen requested, the 24 keywords must be entered")]),a._v(" "),s("p",[a._v("Now you can delegate the tokens to the validator node")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("This transaction is expected to be done with an hsm as a Ledger device . If you are using a Ledger add the "),s("code",[a._v("--ledger")]),a._v(" flag.")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli tx staking delegate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n 50000000000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --from "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("The output should look like this:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('height: 0\ntxhash: 027B85834DA5486085BC56FFD2759443EFD3101BD1023FA9A681262E5C85A845\ncodespace: ""\ncode: 0\ndata: ""\nrawlog: \'[]\'\nlogs: []\ninfo: ""\ngaswanted: 0\ngasused: 0\ntx: null\ntimestamp: ""\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[s("strong",[a._v("Testnet")]),a._v(" You should now see your validator inside the "),s("a",{attrs:{href:"https://testnet.commercio.network",target:"_blank",rel:"noopener noreferrer"}},[a._v("Commercio.network explorer testnet"),s("OutboundLink")],1),a._v(" "),s("strong",[a._v("Mainnet")]),a._v(" You should now see your validator inside the "),s("a",{attrs:{href:"https://mainnet.commercio.network",target:"_blank",rel:"noopener noreferrer"}},[a._v("Commercio.network explorer mainnet"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Congratulations, you are now a Commercio.network validator 🎉")])]),a._v(" "),s("h2",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[a._v("#")]),a._v(" Note")]),a._v(" "),s("p",[a._v("If you want to make transactions with the nano ledger from another machine a full node must be created locally or a full node must be configured to accept remote connections."),s("br"),a._v("\nEdit the "),s("code",[a._v(".cnd/config/config.toml")]),a._v(" file by changing from")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('laddr = "tcp://127.0.0.1:26657"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("to")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('laddr = "tcp://0.0.0.0:26657"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("and restart your node")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl cnd restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("and use the transaction this way")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cncli tx staking delegate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n 50000000000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --from "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your pub addr delegator"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --node tcp://"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip of your fulle node"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":26657 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CHAINID")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10000ucommercio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --ledger "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);