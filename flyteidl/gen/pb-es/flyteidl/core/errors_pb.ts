// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file flyteidl/core/errors.proto (package flyteidl.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ExecutionError_ErrorKind } from "./execution_pb.js";

/**
 * Error message to propagate detailed errors from container executions to the execution
 * engine.
 *
 * @generated from message flyteidl.core.ContainerError
 */
export class ContainerError extends Message<ContainerError> {
  /**
   * A simplified code for errors, so that we can provide a glossary of all possible errors.
   *
   * @generated from field: string code = 1;
   */
  code = "";

  /**
   * A detailed error message.
   *
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * An abstract error kind for this error. Defaults to Non_Recoverable if not specified.
   *
   * @generated from field: flyteidl.core.ContainerError.Kind kind = 3;
   */
  kind = ContainerError_Kind.NON_RECOVERABLE;

  /**
   * Defines the origin of the error (system, user, unknown).
   *
   * @generated from field: flyteidl.core.ExecutionError.ErrorKind origin = 4;
   */
  origin = ExecutionError_ErrorKind.UNKNOWN;

  constructor(data?: PartialMessage<ContainerError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.core.ContainerError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kind", kind: "enum", T: proto3.getEnumType(ContainerError_Kind) },
    { no: 4, name: "origin", kind: "enum", T: proto3.getEnumType(ExecutionError_ErrorKind) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContainerError {
    return new ContainerError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContainerError {
    return new ContainerError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContainerError {
    return new ContainerError().fromJsonString(jsonString, options);
  }

  static equals(a: ContainerError | PlainMessage<ContainerError> | undefined, b: ContainerError | PlainMessage<ContainerError> | undefined): boolean {
    return proto3.util.equals(ContainerError, a, b);
  }
}

/**
 * Defines a generic error type that dictates the behavior of the retry strategy.
 *
 * @generated from enum flyteidl.core.ContainerError.Kind
 */
export enum ContainerError_Kind {
  /**
   * @generated from enum value: NON_RECOVERABLE = 0;
   */
  NON_RECOVERABLE = 0,

  /**
   * @generated from enum value: RECOVERABLE = 1;
   */
  RECOVERABLE = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(ContainerError_Kind)
proto3.util.setEnumType(ContainerError_Kind, "flyteidl.core.ContainerError.Kind", [
  { no: 0, name: "NON_RECOVERABLE" },
  { no: 1, name: "RECOVERABLE" },
]);

/**
 * Defines the errors.pb file format the container can produce to communicate
 * failure reasons to the execution engine.
 *
 * @generated from message flyteidl.core.ErrorDocument
 */
export class ErrorDocument extends Message<ErrorDocument> {
  /**
   * The error raised during execution.
   *
   * @generated from field: flyteidl.core.ContainerError error = 1;
   */
  error?: ContainerError;

  constructor(data?: PartialMessage<ErrorDocument>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.core.ErrorDocument";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "error", kind: "message", T: ContainerError },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorDocument {
    return new ErrorDocument().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorDocument {
    return new ErrorDocument().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorDocument {
    return new ErrorDocument().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorDocument | PlainMessage<ErrorDocument> | undefined, b: ErrorDocument | PlainMessage<ErrorDocument> | undefined): boolean {
    return proto3.util.equals(ErrorDocument, a, b);
  }
}
