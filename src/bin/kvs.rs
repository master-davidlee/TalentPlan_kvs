use clap::{App, Arg, SubCommand};
use kvs::KvStore;

fn main() {
    let matches = App::new("kvs")
        .author(env!("CARGO_PKG_AUTHORS"))
        .version(env!("CARGO_PKG_VERSION"))
        .about(env!("CARGO_PKG_DESCRIPTION"))
        .subcommand(
            SubCommand::with_name("get")
                .about("get the specifiy key's value")
                .arg(Arg::with_name("gkey").required(true)),
        )
        .subcommand(
            SubCommand::with_name("rm")
                .about("remove the specifiy key and value")
                .arg(Arg::with_name("rkey").index(1).required(true)),
        )
        .subcommand(
            SubCommand::with_name("set")
                .about("insert a new key-value pair ")
                .arg(Arg::with_name("skey").index(1).required(true))
                .arg(Arg::with_name("svalue").index(2).required(true)),
        )
        .get_matches();
    if matches.is_present("get") {
        println!("'kvs get' was run");
    }
    if matches.is_present("set") {
        println!("'kvs set' was run");
    }
    if matches.is_present("rm") {
        println!("'kvs rm' was run");
    }

    match matches.subcommand_name() {
        Some("get") => {
            let submatch = matches.subcommand_matches("get").unwrap();
            let key = submatch.value_of("gkey").unwrap();
            let store = KvStore::new();
            store.get(key.to_string());
        }
        Some("set") => {
            let submatch = matches.subcommand_matches("set").unwrap();
            let key = submatch.value_of("skey").unwrap();
            let value = submatch.value_of("svalue").unwrap();
            let mut store = KvStore::new();
            store.set(key.to_string(), value.to_string());
        }
        Some("rm") => {
            let submatch = matches.subcommand_matches("rm").unwrap();
            let key = submatch.value_of("rkey").unwrap();
            let mut store = KvStore::new();
            store.remove(key.to_string());
        }
        None => panic!(),
        _ => println!("Undefiend subcommand"),
    }
}
