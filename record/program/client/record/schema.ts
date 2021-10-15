import { 
  InitializeArgs, 
  WriteArgs,
  SetAuthorityArgs,
  CloseAccountArgs,
  InitializeDynamicArgs,
  WriteDynamicArgs,
} from './instructions';
import { RecordData } from './models';

// TODO: DEFINE META DATA : FOR TRANSACTION INSTRUCTIONS, & GETs | SERIALIZE & DESERIALIZE
// TODO: Define all objects for serializing and deserializing to/from program
export const RECORD_SCHEMA = new Map<any, any>([    
  [
    InitializeArgs, // -> serialize
    {
      kind: 'struct',
      fields: [['instruction', 'u8']],
    },
  ],
  [
    WriteArgs,    // -> serialize
      {
        kind: 'struct',
        fields: [
          ['instruction', 'u8'],       
          ['offset', 'u64'],          
          ['data', 'string'],     // borsh adds length automatically
                                  // if string + 32
                                  // if using fixed size [32]
                                  // add length manually before
                                  // ['data_len', 'u32'],
                                  // ['data', [32]],        
        ],
      },
  ], 
  [
    SetAuthorityArgs, // -> serialize
    {
      kind: 'struct',
      fields: [['instruction', 'u8']],
    },
  ], 
  [
    CloseAccountArgs, // -> serialize
    {
      kind: 'struct',
      fields: [['instruction', 'u8']],
    },
  ], 
  [
    RecordData,     // deserialize ->
    {
      kind: 'struct',
      fields: [
        ['version', 'u8'],
        ['authority', 'pubkey'],
        ['data', [32]],           // fixed size
      ],
    },
  ],
  [
    InitializeDynamicArgs, // -> serialize
    {
      kind: 'struct',
      fields: [['instruction', 'u8']],
    },
  ], 
  [
    WriteDynamicArgs,    // -> serialize
      {
        kind: 'struct',
        fields: [
          ['instruction', 'u8'],       
          ['offset', 'u64'],          
          ['data', 'string'],
        ],
      },
  ], 
]);