#![deny(missing_docs)]
//!just a simple in-memory k/v db.
use std::collections::HashMap;

///Example
/// ```rust
/// use kvs::KvStore;
/// let mut db = KvStore::new();
/// db.set("a".to_owned(),"1".to_owned());
/// assert_eq!(db.get("a".to_owned()), Some("1".to_owned()));
/// db.remove("a".to_owned());
/// assert_eq!(db.get("a".to_owned()), None);
/// ```
///The key/value database
#[derive(Default)]
pub struct KvStore {
    pairs: HashMap<String, String>,
}

impl KvStore {
    ///initialize an hashmap represent a database in memory

    pub fn new() -> Self {
        KvStore {
            pairs: HashMap::new(),
        }
    }

    ///Set the key/value pairs

    pub fn set(&mut self, key: String, value: String) {
        self.pairs.insert(key, value);
    }

    ///get the value match the key

    pub fn get(&self, key: String) -> Option<String> {
        match self.pairs.get(&key) {
            Some(value) => Some(value.to_owned()),
            None => None,
        }
    }

    ///remove a key/pair

    pub fn remove(&mut self, key: String) {
        self.pairs.remove(&key);
    }
}
